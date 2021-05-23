<?php
define( 'WP_CACHE', true ); // Added by Cache Enabler


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define ('WPCF7_AUTOP', false );

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "virt103879_newlinda" );

/** MySQL database username */
define( 'DB_USER', "virt103879_newlinda" );

/** MySQL database password */
define( 'DB_PASSWORD', "P6HWW[z.&+sc%_c|#e]*" );

/** MySQL hostname */
define( 'DB_HOST', "localhost" );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'I)-;mIsio?vXZ`HXW5v;qb4FHomYD+;OEhg(=&b.7/Icm8U9Z:5.srYBwgjb8F8k' );
define( 'SECURE_AUTH_KEY',  '.(/VTd1+Pu[c{.UNk}`Qt$&`J@VmfnpW{(?06A=X08Z8Byh^L}?p^>pMPA~lonR%' );
define( 'LOGGED_IN_KEY',    'm9%iL*F(t9k|@7M982XMhYb:lG:MiES9iM#10&&&DW!!_6(;#&kbZ*|-A7*Sh!Q<' );
define( 'NONCE_KEY',        'nJz+9qs>){^.RLHa:t&@f5lp7kYSwuip4|0&7px|Go+TL!/V/(m)_5MQ8=b7*QcN' );
define( 'AUTH_SALT',        'Oi*Gn@Wx9aM7 4~QRPAG7S6?sH]KrR,5gdv9J?m3?MJvT=uj&5_^If&SAHB= ._Q' );
define( 'SECURE_AUTH_SALT', '&9]R;x[)Ok@/`9S;$|dS73%_Wv0oBKm8s|IbokWvC^#3f!-?k%&glzT7/Dt/&Mj|' );
define( 'LOGGED_IN_SALT',   ']{x6jOr]:)6Ze]5sp2.20zhN70 (s@IPP|fwqeG~.-{f<CIWK@72KQS)C47P3#(V' );
define( 'NONCE_SALT',       'rd74#nSv^ITGS)F(M[n#f+RDG!hK3ML]ls=d&Kqe,9I_1a@z=:%!7CzQ-8s%WF1;' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
