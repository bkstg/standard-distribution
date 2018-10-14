<?php

namespace App\DataFixtures\Processor;

use Bkstg\FOSUserBundle\Entity\User;
use FOS\UserBundle\Model\UserManagerInterface;
use Fidry\AliceDataFixtures\ProcessorInterface;

final class UserProcessor implements ProcessorInterface
{
    private $user_manager;

    public function __construct(UserManagerInterface $user_manager)
    {
        $this->user_manager = $user_manager;
    }

    /**
     * {@inheritdoc}
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
     */
    public function postProcess(string $id, $object): void
    {
        // Do nothing.
    }
}
