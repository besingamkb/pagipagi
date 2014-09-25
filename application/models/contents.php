<?php 

class Contents extends CI_Model {
	public function getAll() {
		$this->db->select("*")->from("contents_tb");
		return $this->db->get()->result();
	}
}