<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Block 
*/
function aab_register_block( $block, $options=array() ){
    return register_block_type(
        'aab-blocks/' . $block,
        array_merge(
			array(
				'style'         => 'accordion_block-cgb-style-css',
				'editor_script' => 'accordion_block-cgb-block-js',
				'editor_style'  => 'accordion_block-cgb-block-editor-css',
			),
            $options
        )
    );
}

/**
 * Register Block Assets
*/
function aab_block_assets() {
	wp_register_style(
		'accordion_block-cgb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		is_admin() ? array( 'wp-editor' ) : null,
		null
	);

	wp_register_script(
		'accordion_block-cgb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);

	wp_register_style(
		'accordion_block-cgb-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		null
	);
	
	aab_register_block('accordion-block');

}
add_action( 'init', 'aab_block_assets' );


/*
 * New Category
 * */
function aab_blocks_new_cat( $categories ){
	return array_merge(
		$categories,
		array(
			array(
				'title' => 'Accordion Block',
				'slug'  => 'accordiion-block'
			)
		)
	);
}
add_filter( 'block_categories_all', 'aab_blocks_new_cat' );

/**
 * External Assets
*/
function aab_enqueue_blocks_assets(){
	wp_enqueue_style( 'dashicons' );
	wp_enqueue_script( 'plugin-js', plugins_url( '../inc/js/plugin.js', __FILE__ ), array('jquery'), time(), true );
}
add_action( 'enqueue_block_assets', 'aab_enqueue_blocks_assets' );

