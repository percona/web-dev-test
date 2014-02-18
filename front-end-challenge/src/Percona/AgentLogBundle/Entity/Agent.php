<?php

namespace Percona\AgentLogBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="agents")
 * @ORM\Entity(repositoryClass="Percona\AgentLogBundle\Entity\AgentRepository")
 */
class Agent
{
    /**
     * @var integer
     *
     * @ORM\Column(name="agent_id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="uuid", type="string", length=36)
     */
    private $uuid;

    /**
     * @var string
     *
     * @ORM\Column(name="hostname", type="string", length=255)
     */
    private $hostname;

    /**
     * @var string
     *
     * @ORM\Column(name="alias", type="string", length=255)
     */
    private $alias;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created", type="datetime")
     */
    private $created;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="deleted", type="datetime")
     */
    private $deleted;

    /**
     * @ORM\OneToMany(targetEntity="Log", mappedBy="agent")
     */
    protected $log;

    public function __construct()
    {
        $this->log = new ArrayCollection();
    }


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set uuid
     *
     * @param string $uuid
     * @return Agent
     */
    public function setUuid($uuid)
    {
        $this->uuid = $uuid;
    
        return $this;
    }

    /**
     * Get uuid
     *
     * @return string 
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * Set hostname
     *
     * @param string $hostname
     * @return Agent
     */
    public function setHostname($hostname)
    {
        $this->hostname = $hostname;
    
        return $this;
    }

    /**
     * Get hostname
     *
     * @return string 
     */
    public function getHostname()
    {
        return $this->hostname;
    }

    /**
     * Set alias
     *
     * @param string $alias
     * @return Agent
     */
    public function setAlias($alias)
    {
        $this->alias = $alias;
    
        return $this;
    }

    /**
     * Get alias
     *
     * @return string 
     */
    public function getAlias()
    {
        return $this->alias;
    }

    /**
     * Set created
     *
     * @param \DateTime $created
     * @return Agent
     */
    public function setCreated($created)
    {
        $this->created = $created;
    
        return $this;
    }

    /**
     * Get created
     *
     * @return \DateTime 
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Set deleted
     *
     * @param \DateTime $deleted
     * @return Agent
     */
    public function setDeleted($deleted)
    {
        $this->deleted = $deleted;
    
        return $this;
    }

    /**
     * Get deleted
     *
     * @return \DateTime 
     */
    public function getDeleted()
    {
        return $this->deleted;
    }

    /**
     * Add log
     *
     * @param \Percona\AgentLogBundle\Entity\Log $log
     * @return Agent
     */
    public function addLog(\Percona\AgentLogBundle\Entity\Log $log)
    {
        $this->log[] = $log;
    
        return $this;
    }

    /**
     * Remove log
     *
     * @param \Percona\AgentLogBundle\Entity\Log $log
     */
    public function removeLog(\Percona\AgentLogBundle\Entity\Log $log)
    {
        $this->log->removeElement($log);
    }

    /**
     * Get log
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getLog()
    {
        return $this->log;
    }
}