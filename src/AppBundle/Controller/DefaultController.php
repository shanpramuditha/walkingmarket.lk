<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', array(
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ));
    }

    /**
     * @Route("/dashboard/test", name="dashboard")
     */
    public function dashboardAction(Request $request)
    {
        return $this->render('default/dashboard.html.twig', array(
        ));
    }

    /**
     * @Route("/elements", name="elements")
     */
    public function elementsAction(Request $request)
    {
        return $this->render('default/elements.html.twig', array(
        ));
    }

    public function getRepository($entity){
        //get the repository
        return $entityRepo=$this->getDoctrine()
            ->getRepository('AppBundle:'.$entity);
    }

    public function getDoctrineManager(){
        //get doctrine manager
        return $this->getDoctrine()->getManager();
    }

    public function insert($obj){
        $em = $this->getDoctrineManager();
        $em->persist($obj);
        $em->flush();
        return true;
    }

}
