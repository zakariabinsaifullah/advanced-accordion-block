<?php
/**
 * Plugin Name:       Advanced Accordion Block
 * Description:       <strong>Advanced Accordion Block</strong> is a custom Gutenberg Block that allows to showcase the content in a accordion mode. It also helps to build FAQ sections easily.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           3.5.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       advanced-accordion-block
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [aagb] && [AAGB] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Final Class
 */

final class AAGB_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->aagb_define_constants();

		// block initialization
		add_action( 'init', [ $this, 'aagb_blocks_init' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'aagb_register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'aagb_register_block_category' ], 10, 2 );
		}

		// plugin support page 
		add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), [ $this, 'aagb_settings_link' ] );
		// redirecting 
		add_action( 'activated_plugin', [ $this, 'aagb_user_redirecting' ] );
		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'aagb_external_libraries' ] );
	}

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function aagb_define_constants() {
		define( 'AAGB_VERSION', '3.5.0' );
		define( 'AAGB_URL', plugin_dir_url( __FILE__ ) );
		define( 'AAGB_LIB_URL', AAGB_URL . 'lib/' );		
	}

	/**
	 * Blocks Registration 
	 */

	public function aagb_register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/' . $name, $options );
	 }

	/**
	 * Blocks Initialization
	*/
	public function aagb_blocks_init() {
		// register single block
		$this->aagb_register_block( 'accordion' );
	}

	/**
	 * Register Block Category
	 */

	public function aagb_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'accordion-block',
					'title' => __( 'Accordion Blocks', 'advanced-accordion-block' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Plugin Support Link
	 */
	function aagb_settings_link( $links ) {
		$gts_settings = array(
			'<a href="'. esc_url( 'https://makegutenblock.com/contact/' ) .'" target="_blank">'.esc_html__( 'Contact', 'advanced-accordion-block' ).'</a>'
		);
		return array_merge( $gts_settings, $links );
	}

	/*
	* Redirecting
	*/
	function aagb_user_redirecting( $plugin ) {
		if( plugin_basename(__FILE__) == $plugin ){
			wp_redirect( admin_url( 'tools.php?page=advanced-accordion-block' ) );
			die();
		}
	}

	/**
	 * Enqueue Block Assets
	 */
	public function aagb_external_libraries() {
		// enqueue JS
		wp_enqueue_script( 'aagb-lib', AAGB_LIB_URL . 'js/lib.js', array(), AAGB_VERSION, true );
	}

}

/**
 * Kickoff
*/

AAGB_BLOCKS_CLASS::init();


// external admin support file 
require_once plugin_dir_path( __FILE__ ) . 'admin/admin.php';

// block patterns 
require_once plugin_dir_path( __FILE__ ) . 'block-patterns/block-patterns.php';