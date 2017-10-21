<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email',EmailType::class,array(
                'attr'=>array(
                    'placeholder'=>'Email'
                )
            ))
            ->add('phone',NumberType::class,array(
                'attr'=>array(
                    'placeholder'=>'Mobile'
                )
            ))
            ->add('firstName',TextType::class,array(
                'attr'=>array(
                    'placeholder'=>'First Name'
                )
            ))
            ->add('lastName',TextType::class,array(
                'attr'=>array(
                    'placeholder'=>'Last Name'
                )
            ))
            ->add('loggedIn',ChoiceType::class, array(
                'choices'=>array(
                    'Login with email'   => 1,
                    'Login with mobile'   =>2
                ),
                'choices_as_values'=>true,
                'multiple'=>false,
                'expanded'=>true,
                'mapped' => false,
            ))
            ->add('password', RepeatedType::class, array(
                'type' => PasswordType::class,
                'invalid_message' => 'The password fields must match',
                'required' => true,
                'first_options' => array('label'=> 'Password','attr'=>array('placeholder'=>'Password')),
                'second_options' => array('label' => 'Repeat Password','attr'=>array('placeholder'=>'Confirm Password'))
            ))
            ->add('register',SubmitType::class)
            ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {

    }

    public function getName()
    {
        return 'app_bundle_user_type';
    }
}
