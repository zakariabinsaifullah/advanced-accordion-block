<?php

/**
 * Custom Pattern Category 
 */
function aagb_blocks_pattern_category() {
    register_block_pattern_category( 'accordion-block', array(
        'label' => __( 'Accordion Blocks', 'advanced-accordion-block' ),
    ) );
  }
  add_action( 'init', 'aagb_blocks_pattern_category' );

/**
 * Advanced Accordion Block Patterns Registration
 */
function aagb_wp_block_patterns( $slug = null, $title = null, $description = null, $content = null ) {
    register_block_pattern(
        'block-pattern/' . $slug,
        array(
            'title'       => __( $title, 'advanced-accordion-block' ),
            'description' => __( $description, 'advanced-accordion-block' ),
            'categories'  => array('accordion-block'),
            'content'     => $content,
        )
    );
}
add_action( 'init', 'aagb_wp_block_patterns',4,10 );


// default style 
aagb_wp_block_patterns(
    'default-accordion',
    'Default Accordion',
    'Default Accordion Block Style',
    '<!-- wp:aagb/accordion-block {"heading":"What is Lorem Ipsum?"} -->
    <div class="wp-block-aagb-accordion-block aab__accordion_container" style="border:1px solid #cccccc;margin-top:0px;margin-bottom:15px;border-radius:0px"><div class="aab__accordion_head aab_right_icon" data-active="false" style="color:#333333;background-color:transparent;padding:10px 15px 10px 15px"><div class="aab__accordion_heading aab_right_icon"><h4 class="aab__accordion_title" style="margin:0;color:#333333">What is Lorem Ipsum?</h4></div><div class="aab__accordion_icon" style="color:#333333;background-color:transparent"><span class="aab__icon dashicons dashicons-plus-alt2"></span></div></div><div class="aab__accordion_body " role="region" style="background-color:transparent;border-top:1px solid #cccccc;padding:10px 15px 10px 15px"><!-- wp:paragraph -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie aliquam sem id ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet massa efficitur, congue nibh laoreet, porttitor dolor.</p>
    <!-- /wp:paragraph --></div></div>
    <!-- /wp:aagb/accordion-block -->
    
    <!-- wp:aagb/accordion-block {"heading":"How to Work hard?"} -->
    <div class="wp-block-aagb-accordion-block aab__accordion_container" style="border:1px solid #cccccc;margin-top:0px;margin-bottom:15px;border-radius:0px"><div class="aab__accordion_head aab_right_icon" data-active="false" style="color:#333333;background-color:transparent;padding:10px 15px 10px 15px"><div class="aab__accordion_heading aab_right_icon"><h4 class="aab__accordion_title" style="margin:0;color:#333333">How to Work hard?</h4></div><div class="aab__accordion_icon" style="color:#333333;background-color:transparent"><span class="aab__icon dashicons dashicons-plus-alt2"></span></div></div><div class="aab__accordion_body " role="region" style="background-color:transparent;border-top:1px solid #cccccc;padding:10px 15px 10px 15px"><!-- wp:paragraph -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie aliquam sem id ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet massa efficitur, congue nibh laoreet, porttitor dolor.</p>
    <!-- /wp:paragraph --></div></div>
    <!-- /wp:aagb/accordion-block -->'
);


// colro style 
aagb_wp_block_patterns(
    'color-accordion',
    'Color Accordion',
    'Color Style Accordion',
    '<!-- wp:aagb/accordion-block {"borderRadius":5,"heading":"How to make color accordion?","headingColor":"#ff0000","headerBg":"#fff6d8","iconColor":"#ff0000","borderColor":"#ff0000","bodyBg":"#fff6d8"} -->
    <div class="wp-block-aagb-accordion-block aab__accordion_container" style="border:1px solid #ff0000;margin-top:0px;margin-bottom:15px;border-radius:5px"><div class="aab__accordion_head aab_right_icon" data-active="false" style="color:#ff0000;background-color:#fff6d8;padding:10px 15px 10px 15px"><div class="aab__accordion_heading aab_right_icon"><h4 class="aab__accordion_title" style="margin:0;color:#ff0000">How to make color accordion?</h4></div><div class="aab__accordion_icon" style="color:#ff0000;background-color:transparent"><span class="aab__icon dashicons dashicons-plus-alt2"></span></div></div><div class="aab__accordion_body " role="region" style="background-color:#fff6d8;border-top:1px solid #ff0000;padding:10px 15px 10px 15px"><!-- wp:paragraph -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie aliquam sem id ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet massa efficitur, congue nibh laoreet, porttitor dolor.</p>
    <!-- /wp:paragraph --></div></div>
    <!-- /wp:aagb/accordion-block -->
    
    <!-- wp:aagb/accordion-block {"borderRadius":5,"heading":"What is Lorem Ipsum?","headingColor":"#ff0000","headerBg":"#fff6d8","iconColor":"#ff0000","borderColor":"#ff0000","bodyBg":"#fff6d8"} -->
    <div class="wp-block-aagb-accordion-block aab__accordion_container" style="border:1px solid #ff0000;margin-top:0px;margin-bottom:15px;border-radius:5px"><div class="aab__accordion_head aab_right_icon" data-active="false" style="color:#ff0000;background-color:#fff6d8;padding:10px 15px 10px 15px"><div class="aab__accordion_heading aab_right_icon"><h4 class="aab__accordion_title" style="margin:0;color:#ff0000">What is Lorem Ipsum?</h4></div><div class="aab__accordion_icon" style="color:#ff0000;background-color:transparent"><span class="aab__icon dashicons dashicons-plus-alt2"></span></div></div><div class="aab__accordion_body " role="region" style="background-color:#fff6d8;border-top:1px solid #ff0000;padding:10px 15px 10px 15px"><!-- wp:paragraph -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie aliquam sem id ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet massa efficitur, congue nibh laoreet, porttitor dolor.</p>
    <!-- /wp:paragraph --></div></div>
    <!-- /wp:aagb/accordion-block -->'
);

// Different icon position 
aagb_wp_block_patterns(
    'icon-accordion',
    'Different Icon and Position Style',
    'Icon and Position Style',
    '<!-- wp:aagb/accordion-block {"borderRadius":5,"heading":"How to make a color accordion?","headingColor":"#000000","headerBg":"#ffffff","iconClass":"plus-alt","iconPosition":"aab_left_icon","iconColor":"#ffffff","iconBackground":"#000000","borderColor":"#000000","bodyBg":"#ffffff","makeActive":true} -->
    <div class="wp-block-aagb-accordion-block aab__accordion_container" style="border:1px solid #000000;margin-top:0px;margin-bottom:15px;border-radius:5px"><div class="aab__accordion_head aab_left_icon" data-active="true" style="color:#000000;background-color:#ffffff;padding:10px 15px 10px 15px"><div class="aab__accordion_heading aab_left_icon"><h4 class="aab__accordion_title" style="margin:0;color:#000000">How to make a color accordion?</h4></div><div class="aab__accordion_icon" style="color:#ffffff;background-color:#000000"><span class="aab__icon dashicons dashicons-dismiss"></span></div></div><div class="aab__accordion_body aab__accordion_body--show" role="region" style="background-color:#ffffff;border-top:1px solid #000000;padding:10px 15px 10px 15px"><!-- wp:paragraph -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie aliquam sem id ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet massa efficitur, congue nibh laoreet, porttitor dolor.</p>
    <!-- /wp:paragraph --></div></div>
    <!-- /wp:aagb/accordion-block -->
    
    <!-- wp:aagb/accordion-block {"borderRadius":5,"heading":"What is Lorem Ipsum?","headingColor":"#000000","headerBg":"#ffffff","iconClass":"plus-alt","iconPosition":"aab_left_icon","iconColor":"#ffffff","iconBackground":"#000000","borderColor":"#000000","bodyBg":"#ffffff"} -->
    <div class="wp-block-aagb-accordion-block aab__accordion_container" style="border:1px solid #000000;margin-top:0px;margin-bottom:15px;border-radius:5px"><div class="aab__accordion_head aab_left_icon" data-active="false" style="color:#000000;background-color:#ffffff;padding:10px 15px 10px 15px"><div class="aab__accordion_heading aab_left_icon"><h4 class="aab__accordion_title" style="margin:0;color:#000000">What is Lorem Ipsum?</h4></div><div class="aab__accordion_icon" style="color:#ffffff;background-color:#000000"><span class="aab__icon dashicons dashicons-plus-alt"></span></div></div><div class="aab__accordion_body " role="region" style="background-color:#ffffff;border-top:1px solid #000000;padding:10px 15px 10px 15px"><!-- wp:paragraph -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie aliquam sem id ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet massa efficitur, congue nibh laoreet, porttitor dolor.</p>
    <!-- /wp:paragraph --></div></div>
    <!-- /wp:aagb/accordion-block -->'
);

// Linked Accordion
aagb_wp_block_patterns(
    'linked-accordion',
    'Linked Accordion',
    'Linked Accordion Style',
    '<!-- wp:aagb/accordion-block {"borderRadius":5,"heading":"Linked Accordion","headingColor":"#ffffff","headerBg":"#4b894b","iconColor":"#000000","iconBackground":"#ffffff","borderColor":"#ffffff","bodyBg":"#ffffff","makeActive":true,"linkedAccordion":true,"link":"https://makegutenblock.com"} -->
    <div class="wp-block-aagb-accordion-block aab__accordion_container" style="border:1px solid #ffffff;margin-top:0px;margin-bottom:15px;border-radius:5px"><a href="https://makegutenblock.com" target="_self" rel="noopener" class="aab__accordion_link"><div class="aab__accordion_head aab_right_icon" data-active="true" style="color:#ffffff;background-color:#4b894b;padding:10px 15px 10px 15px"><div class="aab__accordion_heading aab_right_icon"><h4 class="aab__accordion_title" style="margin:0;color:#ffffff">Linked Accordion</h4></div><div class="aab__accordion_icon" style="color:#000000;background-color:#ffffff"><span class="aab__icon dashicons dashicons-minus"></span></div></div></a></div>
    <!-- /wp:aagb/accordion-block -->
    
    <!-- wp:aagb/accordion-block {"borderRadius":5,"heading":"What is Lorem Ipsum?","headingColor":"#000000","headerBg":"#ffffff","iconClass":"plus-alt","iconPosition":"aab_left_icon","iconColor":"#ffffff","iconBackground":"#000000","borderColor":"#000000","bodyBg":"#ffffff"} -->
    <div class="wp-block-aagb-accordion-block aab__accordion_container" style="border:1px solid #000000;margin-top:0px;margin-bottom:15px;border-radius:5px"><div class="aab__accordion_head aab_left_icon" data-active="false" style="color:#000000;background-color:#ffffff;padding:10px 15px 10px 15px"><div class="aab__accordion_heading aab_left_icon"><h4 class="aab__accordion_title" style="margin:0;color:#000000">What is Lorem Ipsum?</h4></div><div class="aab__accordion_icon" style="color:#ffffff;background-color:#000000"><span class="aab__icon dashicons dashicons-plus-alt"></span></div></div><div class="aab__accordion_body " role="region" style="background-color:#ffffff;border-top:1px solid #000000;padding:10px 15px 10px 15px"><!-- wp:paragraph -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie aliquam sem id ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet massa efficitur, congue nibh laoreet, porttitor dolor.</p>
    <!-- /wp:paragraph --></div></div>
    <!-- /wp:aagb/accordion-block -->'
);