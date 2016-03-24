<?php
  $list = [
    array( 'title' => 'Basic',
      'items' => [
        array('title' => 'Text', 'url' => 'text'),
        array('title' => 'Lists', 'url' => 'list'),
        array('title' => 'Table', 'url' => 'table'),
        array('title' => 'Image', 'url' => 'image'),
        array('title' => 'Text helpers', 'url' => 'text-helpers')
      ]
    ),
    array( 'title' => 'Inputs',
      'items' => [
        array('title' => 'Form inputs', 'url' => 'form'),
        array('title' => 'Buttons', 'url' => 'button'),
        array('title' => 'Tags', 'url' => 'tags')
      ]
    ),
    array( 'title' => 'Groups',
      'items' => [
        array('title' => 'What is a <i>group</i>', 'url' => 'group'),
        array('title' => 'Dropdown', 'url' => 'dropdown'),
        array('title' => 'Tabs', 'url' => 'tabs'),
        array('title' => 'Menus', 'url' => 'menus'),
        array('title' => 'Breadcrumbs', 'url' => 'breadcrumbs'),
        array('title' => 'Pagination', 'url' => 'pagination')
      ]
    ),
    array( 'title' => 'Float',
      'items' => [
        array('title' => 'Dropdown', 'url' => 'dropdown'),
        array('title' => 'Tooltips', 'url' => 'tooltips'),
        array('title' => 'Popups', 'url' => 'popups')
      ]
    ),
    array( 'title' => 'Layout',
      'items' => [
        array('title' => 'Grid', 'url' => 'grid'),
        array('title' => 'Flex', 'url' => 'flex'),
        array('title' => 'Layout helpers', 'url' => 'layout-helpers')
      ]
    ),
   
    array( 'title' => 'Navigation',
      'items' => [
        array('title' => 'Headers', 'url' => 'headers')
      ]
    ),
    array( 'title' => 'Elements',
      'items' => [
        array('title' => 'Boxes', 'url' => 'boxes'),
        
        array('title' => 'Icons', 'url' => 'icons')
      ]
    ),

    array( 'title' => 'Components',
      'items' => [        
        array('title' => 'Alerts', 'url' => 'alerts'),
        
        array('title' => 'Embeb content', 'url' => 'embeb'),
        array('title' => 'Modal', 'url' => 'modal'),
        
        array('title' => 'Expando', 'url' => 'expando'),
        array('title' => 'Accordion', 'url' => 'accordion'),
        array('title' => 'Sliders', 'url' => 'sliders'),
        array('title' => 'Sticky', 'url' => 'sticky')
      ]
    ),
  ];

  /******************************************************************************/
  $isPage = false;
  if( isset($_GET['p']) ) {
    $isPage = true;
    $current =  $_GET['p'];
  }else{
    $current = 'welcome';
  }
  // Create the menu
  $menu = '';
  $existsCurrent = false;
  for ($i = 0; $i < count($list); $i++) {
    $menu .= '<div class="doc-group">';
    $menu .= '<h3 class="h3">'.$list[$i]['title'].'</h3>';
    $menu .= '<ul>';
    for ($j = 0; $j < count($list[$i]['items']); $j++) {
      $url = $list[$i]['items'][$j]['url'];
      $isActive = '';
      $href = ' href="?p='.$url.'"';
      if($url == $current){
        $existsCurrent = true;
        $isActive = ' class="active"';
        $href = '';
      }
      $menu .= '<li>';
      $menu .= '<a'.$href.$isActive.'>'.$list[$i]['items'][$j]['title'].'</a>';

      $menu .= '</li>';
    }
    $menu .= '</ul>';
    $menu .= '</div>';
  }
  if(!$existsCurrent){
    $current = 'welcome';
  }
?>
<!doctype HTML>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Pin</title>
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

  <link rel="stylesheet" href="css/github-highlight.css">
  <!-- LESS -->
  <link rel="stylesheet/less" type="text/css" href="../css/less/pin.less" />

  <!-- CSS -->
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
  <div class="doc-page">
  	<div class="container">
      <div class="row gap-0">
        <div class="col col-1-5">
          <div id="doc-index">
            <p><?php echo $menu; ?></p>
          </div>
        </div>
        <div class="col col-4-5">
          <div id="doc-content" class="clearfix">
            <?php include_once('html/'.$current.'.html'); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="js/jquery-1.11.2.min.js" type="text/javascript"></script>
  <script src="js/jquery.doc.tabs.js" type="text/javascript"></script>
  <script src="js/less.min.js" type="text/javascript"></script>

  <script src="js/highlight.pack.js" type="text/javascript"></script>
  <script src="js/docs.js" type="text/javascript"></script>



  <!-- PIN Javascript -->
  <script src="../js/pin.boot.js" type="text/javascript"></script>
  <script src="../js/tabs.js" type="text/javascript"></script>
  <script src="../js/popup.js" type="text/javascript"></script>
  <script src="../js/pin.js" type="text/javascript"></script>














</body>

</html>