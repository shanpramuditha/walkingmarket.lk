<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use AppBundle\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends DefaultController
{
    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request){
        $auth_checker = $this->get('security.authorization_checker');
        $token = $this->get('security.token_storage')->getToken();

        $user = $token->getUser();


        $isRoleAdmin = $auth_checker->isGranted('ROLE_ADMIN');
        if ($isRoleAdmin) {
            return $this->redirect(
                $this->generateUrl("dashboard")
            );
        }


        $authenticationUtils = $this->get('security.authentication_utils');

        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUserName();
        return $this->render('security/login.html.twig', array(
            'last_username' => $lastUsername,
            'error' => $error
        ));
    }

    /**
     * @Route("/signup",name="register")
     */
    public function registerAction(Request $request){
        $user = new User();
        $form = $this->createForm(UserType::class,$user);
        $form->handleRequest($request);
        if($form->isSubmitted() and $form->isValid()){
            $loggedIn = $form["loggedIn"]->getData();
            $username = '';
            if($loggedIn == 1){
                $username = $user->getEmail();
            }elseif ($loggedIn == 2){
                $username = $user->getPhone();
            }
            $user->setUsername($username);
            $plainPassword = $user->getPassword();

            $encoder = $this->container->get('security.password_encoder');
            $encoded = $encoder->encodePassword($user, $plainPassword);
            $user->setPassword($encoded);

            $user->setActive(true);

            $em = $this->insert($user);
            return $this->redirectToRoute('login');

        }
        return $this->render('security/register.html.twig',array(
            'form'=>$form->createView()
        ));
    }
}
