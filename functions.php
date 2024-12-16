<?php
if (!defined('ABSPATH')) exit;

// Enqueue scripts and styles
function segucargo_enqueue_scripts() {
    // Enqueue main CSS
    wp_enqueue_style(
        'segucargo-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version')
    );

    // Enqueue React bundle
    wp_enqueue_script(
        'segucargo-react',
        get_template_directory_uri() . '/dist/assets/index.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );

    // Add WordPress REST API nonce to window object
    wp_localize_script(
        'segucargo-react',
        'wpApiSettings',
        array(
            'nonce' => wp_create_nonce('wp_rest'),
            'siteUrl' => get_site_url()
        )
    );
}
add_action('wp_enqueue_scripts', 'segucargo_enqueue_scripts');

// Add theme support
function segucargo_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'segucargo_theme_support');