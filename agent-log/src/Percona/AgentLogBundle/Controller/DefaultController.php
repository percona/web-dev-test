<?php

namespace Percona\AgentLogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($uuid)
    {
        // Get the agent by uuid.
        $agentRepo = $this->getDoctrine()->getRepository('PerconaAgentLogBundle:Agent');
        $agent = $agentRepo->findOneByUuid($uuid);
        if (!$agent) {
            throw $this->createNotFoundException('Agent ' . $uuid . ' not found');
        }

        return $this->render(
            'PerconaAgentLogBundle:Default:index.html.twig',
            array('log' => $agent->getLog())
        );
    }
}
