<?php
/**
 * Admin Support Page
*/

class AAB_Admin_Page {
    /**
     * Contructor
    */
    public function __construct(){
        add_action( 'admin_menu', [ $this, 'aab_plugin_admin_page' ] );
        add_action( 'admin_enqueue_scripts', [ $this, 'aab_admin_page_assets' ] );
        add_action( 'admin_notices', [ $this, 'aab_admin_notices' ] );
    }

    // admin notice
    public function aab_admin_notices(){
        if ( !( isset($_COOKIE['aab_notice_dismiss']) && $_COOKIE['aab_notice_dismiss'] == 1 )) :
        ?>
            <div class="notice notice-success is-dismissible aab__admin-notice">
                <p>Thanks for using <strong>Advanced Accordion Block</strong>. Please <a target="_blank" rel="nofollow noreferrer" href="<?php echo esc_url('https://wordpress.org/plugins/advanced-accordion-block/#reviews'); ?>">Rate This</a> or <a target="_blank" rel="nofollow noreferrer" href="<?php echo esc_url('https://www.patreon.com/dev_zak'); ?>">Donate Me</a></p>
            </div>
        <?php
        endif;
    }

    // Admin Assets
    public function aab_admin_page_assets($screen) {
        if( 'tools_page_advanced-accordion-block' == $screen ) {
            wp_enqueue_style( 'aab-admin-css', plugins_url('assets/css/admin.css', __FILE__ ) );
        }
        wp_enqueue_script( 'aab-admin-js', plugins_url('assets/js/admin.js', __FILE__ ), array(), '1.0.0', true );
    }

    // Admin Page
    public function aab_plugin_admin_page(){
        add_submenu_page( 'tools.php', 'Accordion Block', 'Accordion Block', 'manage_options', 'advanced-accordion-block', [ $this, 'aab_admin_page_content_callback' ] );
    }
    public function aab_admin_page_content_callback(){
        ?>
            <div class="admin_page_container">
                <div class="plugin_head">
                    <div class="head_container">
                        <h1 class="plugin_title"> Advanced Accordion Block </h1>
                        <h4 class="plugin_subtitle">A Custom Gutenberg Block to Build Accordion FAQ</h4>
                        <div class="support_btn">
                            <a href="https://www.patreon.com/dev_zak" target="_blank" rel="nofollow noreferrer" class="btn-style-six">Donate</a>
                            <a href="https://demos.makegutenblock.com/aab-v3/" target="_blank" rel="nofollow noreferrer" class="btn-style-one">See Demos</a>
                            <a href="https://wordpress.org/plugins/advanced-accordion-block/#reviews" target="_blank" rel="nofollow noreferrer" class="btn-style-two">Rate Plugin</a>
                        </div>
                    </div>
                </div>
                <div class="plugin_body">
                    <div class="plugin_features">
                        <h4>Key Features: </h4>
                        <li>Highly Customizable</li>
                        <li><b>Built with Gutenberg Native Components</b></li>
                        <li><b>No External Dependency,e.g jQuery.</b></li>
                        <li><b>Unlimiated Nested Accordion</b></li>
                        <li>SEO Friendly</li>
                        <li>All Types of Content Supported</li>
                        <li>Responsive</li>
                        <li><b>Super Fast, Slick Size: ~45kb (18kb in zip)</b></li>
                        <li>Amazing Features</li>
                        <li>5 Pairs of Icons</li>
                        <li>Make Active Accordion on Page Load</li>
                        <li><i>much more...</i></li>
                    </div>
                    <div class="doc_video_area">
                        <div class="doc_video">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/gZ_zL6RwQhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="support_area">
                        <div class="single_support">
                            <h4 class="support_title">Hire Me On</h4>
                            <div class="support_btn">
                                <a href="https://www.fiverr.com/users/devs_zak/" target="_blank" rel="nofollow noreferrer" class="btn-style-three">@Fiverr</a>
                                <a href="https://www.upwork.com/freelancers/~010af183b3205dc627" target="_blank" rel="nofollow noreferrer" class="btn-style-four">@UpWork</a>
                            </div>
                        </div>
                        <div class="single_support">
                            <h4 class="support_title">Directly Reach to Me</h4>
                            <div class="support_btn">
                                <a href="https://makegutenblock.com/contact" target="_blank" rel="nofollow noreferrer" class="btn-style-six">Contact</a>
                                <a href="mailto:zbinsaifullah@gmail.com" class="btn-style-five">Send Mail</a>
                            </div>
                        </div>
                        <div class="single_support">
                            <div class="support_btn">
                                <a href="https://makegutenblock.com/" target="_blank" rel="nofollow noreferrer" class="btn-style-four">Check Out More Blocks</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php
    }
}
 new AAB_Admin_Page();
