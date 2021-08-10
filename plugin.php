<?php
/**
 * Plugin Name: Advanced Accordion Block
 * Description: <strong>Advanced Accordion Block</strong> is a custom Gutenberg Block that allows to showcase the content in a accordion mode. It also helps to build FAQ sections easily. 
 * Author: Zakaria Binsaifullah
 * Author URI: https://webackstop.com/
 * Version: 1.0.1
 * License: GPL2+
 * Text Domain: advanced-accordion-block
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';


/**	 
 * Admin CSS
*/
function aab_admin_css_load($screen) {
	// if( 'tools_page_duplicate-pp' == $screen ) {
		wp_enqueue_style( 'aab-admin', plugins_url('inc/admin-css/admin.css', __FILE__ ) );
	// }
}
add_action( 'admin_enqueue_scripts', 'aab_admin_css_load' );

/**
 * Plugin Support Link
 */

function aab_settings_link( $links ) {
	$gts_settings = array(
		'<a href="'. esc_url( 'https://webackstop.com/contact/' ) .'" target="_blank" style="color: green; font-weight: bold">Contact</a>',
		'<a href="'. esc_url( 'https://wordpress.org/plugins/advanced-accordion-block/#reviews' ) .'" target="_blank" style="color: green; font-weight: bold">Rate Plugin</a>',
	);
	return array_merge( $gts_settings, $links );
}
add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), 'aab_settings_link' );

/**	 
 * Admin Support Page
*/
function aab_admin_support_page() {
	add_submenu_page('plugins.php', __('Accordion Block','advanced-accordion-block'), __('Accordion Block','advanced-accordion-block'), 'manage_options', 'advanced-accordion-block', 'aab_admin_page_callback');
}
add_action( 'admin_menu', 'aab_admin_support_page' );

function aab_admin_page_callback() {
	?>
		<div class="dpp_admin_page">
			<div class="ddp_head">
				<h2> <?php echo __( 'Advanced Accordion Gutenberg Block','advanced-accordion-block' ); ?> </h2>
			</div>
			<div class="dpp_body">
				<div class="dpp_left_body">
					<p><b>Advanced Accordion Gutenberg Block</b>- is a <b>Custom Gutenberg Block</b> that allows you to build a <b>FAQs Section</b> or <b>Accordion</b> easily on your site post and page using <b>Gutenberg Editor</b>.</p>
					<h3><?php echo __( 'Included Features','advanced-accordion-block' ); ?></h3>
					<ul>
						<li>Custom Minimal Design</li>
						<li>Super fast, light-weight and optimized</li>
						<li>Built with Gutenberg Native Components</li>
						<li>Highly Customizable with a lot of options</li>
						<li>Different options for each component</li>
						<li>Unlimited FAQs</li>
						<li>Infinite Reusable</li>
					</ul>
					<h3><?php echo __( 'Accordion Block in Action','advanced-accordion-block' ); ?></h3>
					<div class="dpp_action_img">
						<img src=<?php echo plugin_dir_url(__FILE__).'/inc/img/aab.jpg'; ?>>
					</div>
				</div>
				<div class="dpp_right_sidebar">
					<div class="dpp_support_blocks">
						<div class="single-block">
							<div class="icon">
								<span class="dashicons dashicons-format-status"></span>
							</div>
							<div class="help_link">
							<span><?php echo __( 'Convert any Design into Gutenberg Block', 'advanced-accordion-block' ); ?></span>
							<?php echo '<a href="https://makegutenblock.com/contact/" target="_blank">'.__('Contact Me','advanced-accordion-block').'</a>'; ?>
							</div>
						</div>
						<div class="single-block">
							<div class="icon">
								<span class="dashicons dashicons-welcome-learn-more"></span>
							</div>
							<div class="help_link">
							<span><?php echo __( 'Hire Me On', 'advanced-accordion-block' ); ?>
								
							</span><?php echo '<a href="https://www.fiverr.com/devs_zak" target="_blank">'.__('Fiverr','advanced-accordion-block').'</a>'; ?>
							</span><?php echo '<a href="https://www.upwork.com/freelancers/~010af183b3205dc627" target="_blank">'.__('UpWork','advanced-accordion-block').'</a>'; ?>
							</div>
						</div>
						<div class="single-block">
							<div class="icon">
								<span class="dashicons dashicons-thumbs-up"></span>
							</div>
							<div class="help_link">
							<span><?php echo __( 'Like this plugin?', 'duplicate-pp' ); ?></span>
							<?php echo '<a href="https://wordpress.org/plugins/advanced-accordion-block/#reviews" target="_blank">'.__('Leave a Positive Review','advanced-accordion-block').'</a>'; ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	<?php 
}

/*
* Redirecting
*/
function aab_user_redirecting( $plugin ) {
	if( plugin_basename(__FILE__) == $plugin ){
		wp_redirect( admin_url( 'plugins.php?page=advanced-accordion-block' ) );
		die();
	}
}
add_action( 'activated_plugin', 'aab_user_redirecting' );

