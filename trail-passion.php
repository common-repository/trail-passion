<?php
/**
 * @package TrailPassion
 * @version 0.2
 */
/*
Plugin Name: Trail-Passion
Plugin URI: http://wordpress.org/plugins/trail-passion/
Description: Embed high quality maps in wordpress with elevation graphs and 3D views.
Author: Tolokoban
Version: 1.0
Author URI: http://trail-passion.net
License: GPL2
*/

/*  Copyright 2015  Tolokoban  (email : contact@tolokoban.org)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

function trailpassion_parse($attribs)
{
  $page = "trace.html";
  if (array_key_exists('view', $attribs)) {
    $view = strtolower($attribs['view']);
    switch ($view) {
    case 'profil': $page = 'profil.html'; break;
    case 'fly': $page = '3d.html'; break;
    case 'follow': $page = 'follow.html'; break;
    }
  }
  if (array_key_exists('id', $attribs)) {
    $page .= '?id=' . $attribs['id'];
  } else {
    $page = "";
  }
  if (array_key_exists('width', $attribs)) {
    $width = trim($attribs['width']);
    if ($width == "") $width = "100%";
    if (substr($width, -1) != '%') {
      $width = intVal($width);
      if ($width < 240) $width = 240;
      $width .= "px";
    }
  } else {
    $width = "100%";
  }
  if (array_key_exists('height', $attribs)) {
    $height = trim($attribs['height']);
    if ($height == "") $height = "600";
    if (substr($height, -1) != '%') {
      $height = intVal($height);
      if ($height < 160) $height = 160;
      $height .= "px";
    }
  } else {
    $height = "600px";
  }

  return '<div class="trailpassion" style="position:relative;width:' . $width . ';'
    . 'height:' . $height . ';'
    . 'background-image:url(' . plugins_url() . '/trail-passion/logo.svg);">'
    . '<div class="fullscreen" title="Fullscreen">'
    . '<a href="http://trail-passion.net/' . $page . '">'
    . '<img src="' . plugins_url() . '/trail-passion/fullscreen.png"/></a></div>'
    . '<iframe src="http://trail-passion.net/'
    . $page
    . '" '
    . 'style="position:absolute;width:100%;height:100%"></iframe>'
    . '</div>';
}

add_shortcode('trail-passion', 'trailpassion_parse');

function trailpassion_buttons() {
  add_filter('mce_external_plugins', 'trailpassion_add_buttons');
  add_filter('mce_buttons', 'trailpassion_register_buttons');
}
function trailpassion_add_buttons( $plugin_array ) {
    $plugin_array['trailpassion'] = plugins_url() 
    . '/trail-passion/trail-passion-plugin.js';
    return $plugin_array;
}
function trailpassion_register_buttons( $buttons ) {
    array_push( $buttons, 'trailpassion' );
    return $buttons;
}

add_action('init', 'trailpassion_buttons');

function trailpassion_css() {
  $css = plugins_url( 'trail-passion-plugin.css', __FILE__ );
  wp_enqueue_style("trailpassion-css", $css);
}
add_filter( 'init', 'trailpassion_css' );
?>