<?php
 
include_once('../routes/routes.php');
include_once('../controllers/controller.php');
include_once('../configs/render.php');
include_once('../models/model.php');


include_once('../views/partials/header.php');
$route = $_GET['main_route'] ?? "";
new Routes($route);
include_once('../views/partials/footer.php');
?>