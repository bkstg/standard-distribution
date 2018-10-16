<?php

namespace App\DataFixtures\Processor;

use Bkstg\FOSUserBundle\Entity\User;
use FOS\UserBundle\Model\UserManagerInterface;
use Fidry\AliceDataFixtures\ProcessorInterface;

final class UserProcessor implements ProcessorInterface
{
    private $user_manager;

    /**
     * Create a new user processor.
     *
     * @param UserManagerInterface $user_manager The user manager service.
     */
    public function __construct(UserManagerInterface $user_manager)
    {
        $this->user_manager = $user_manager;
    }

    /**
     * {@inheritdoc}
     *
     * @param string $id     The id of the object.
     * @param mixed  $object The object to modify.
     *
     * @return void
     */
    public function preProcess(string $id, $object): void
    {
        if (!$object instanceof User) {
            return;
        }

        $this->user_manager->updateCanonicalFields($object);
        $this->user_manager->updatePassword($object);
    }

    /**
     * {@inheritdoc}
     *
     * @param string $id     The id of the object to process.
     * @param mixed  $object The object to modify.
     *
     * @return void
     */
    public function postProcess(string $id, $object): void
    {
        // Do nothing.
    }
}
