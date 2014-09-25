<?php 

class Main extends CI_Controller {
	function __construct() {
		parent::__construct();
		//$this->load->library('database');
		$this->load->model('contents');

	}
	public function index() {
		header('content-type: application/json');
		echo json_encode($this->contents->getAll());
	}
}