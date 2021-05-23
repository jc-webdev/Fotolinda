WebP Express 0.17.5. Conversion triggered using bulk conversion, 2020-09-01 22:50:50

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.4.9
- Server software: LiteSpeed

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png.webp
- log-call-arguments: true
- converters: (array of 9 items)

The following options have not been explicitly set, so using the following defaults:
- converter-options: (empty array)
- shuffle: false
- preferred-converters: (empty array)
- extra-converters: (empty array)

The following options were supplied and are passed on to the converters in the stack:
- alpha-quality: 85
- encoding: "auto"
- metadata: "none"
- near-lossless: 60
- quality: 85
------------


*Trying: cwebp* 

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png.webp
- alpha-quality: 85
- encoding: "auto"
- low-memory: true
- log-call-arguments: true
- metadata: "none"
- method: 6
- near-lossless: 60
- quality: 85
- use-nice: true
- command-line-options: ""
- try-common-system-paths: true
- try-supplied-binary-for-os: true

The following options have not been explicitly set, so using the following defaults:
- auto-filter: false
- default-quality: 85
- max-quality: 85
- preset: "none"
- size-in-percentage: null (not set)
- skip: false
- rel-path-to-precompiled-binaries: *****
- try-cwebp: true
- try-discovering-cwebp: true
------------

Encoding is set to auto - converting to both lossless and lossy and selecting the smallest file

Converting to lossy
Looking for cwebp binaries.
Discovering if a plain cwebp call works (to skip this step, disable the "try-cwebp" option)
- Executing: cwebp -version 2>&1. Result: version: *1.1.0*
We could get the version, so yes, a plain cwebp call works
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 3 binaries: 
- /usr/local/bin/cwebp
- /usr/bin/cwebp
- /bin/cwebp
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 2 binaries: 
- /usr/bin/cwebp
- /usr/local/bin/cwebp
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (Linux)... We do. We in fact have 3
Found 3 binaries: 
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64
Detecting versions of the cwebp binaries found
- Executing: cwebp -version 2>&1. Result: version: *1.1.0*
- Executing: /usr/local/bin/cwebp -version 2>&1. Result: version: *1.1.0*
- Executing: /usr/bin/cwebp -version 2>&1. Result: version: *0.3.0*
- Executing: /bin/cwebp -version 2>&1. Result: version: *0.3.0*
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (user: "virt103879" does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static -version 2>&1. Result: *Exec failed*. Permission denied (user: "virt103879" does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (user: "virt103879" does not have permission to execute that binary)
Binaries ordered by version number.
- cwebp: (version: 1.1.0)
- /usr/local/bin/cwebp: (version: 1.1.0)
- /usr/bin/cwebp: (version: 0.3.0)
- /bin/cwebp: (version: 0.3.0)
Trying the first of these. If that should fail (it should not), the next will be tried and so on.
Creating command line options for version: 1.1.0
Quality: 85. 
The near-lossless option ignored for lossy
Trying to convert by executing the following command:
nice cwebp -metadata none -q 85 -alpha_q '85' -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png.webp.lossy.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png.webp.lossy.webp'
File:      [doc-root]/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png
Dimension: 640 x 960
Output:    58870 bytes Y-U-V-All-PSNR 43.88 47.11 46.97   44.70 dB
           (0.77 bpp)
block count:  intra4:       2121  (88.38%)
              intra16:       279  (11.62%)
              skipped:        19  (0.79%)
bytes used:  header:            303  (0.5%)
             mode-partition:   9710  (16.5%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |   28784 |    2218 |    2748 |    2095 |   35845  (60.9%)
 intra16-coeffs:  |     867 |     345 |     438 |     670 |    2320  (3.9%)
  chroma coeffs:  |    7976 |     627 |     956 |    1106 |   10665  (18.1%)
    macroblocks:  |      58%|      12%|      14%|      17%|    2400
      quantizer:  |      17 |      13 |       9 |       8 |
   filter level:  |       8 |       6 |      12 |       0 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |   37627 |    3190 |    4142 |    3871 |   48830  (82.9%)

Success
Reduction: 92% (went from 711 kb to 57 kb)

Converting to lossless
Looking for cwebp binaries.
Discovering if a plain cwebp call works (to skip this step, disable the "try-cwebp" option)
- Executing: cwebp -version 2>&1. Result: version: *1.1.0*
We could get the version, so yes, a plain cwebp call works
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 3 binaries: 
- /usr/local/bin/cwebp
- /usr/bin/cwebp
- /bin/cwebp
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 2 binaries: 
- /usr/bin/cwebp
- /usr/local/bin/cwebp
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (Linux)... We do. We in fact have 3
Found 3 binaries: 
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64
Detecting versions of the cwebp binaries found
- Executing: cwebp -version 2>&1. Result: version: *1.1.0*
- Executing: /usr/local/bin/cwebp -version 2>&1. Result: version: *1.1.0*
- Executing: /usr/bin/cwebp -version 2>&1. Result: version: *0.3.0*
- Executing: /bin/cwebp -version 2>&1. Result: version: *0.3.0*
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (user: "virt103879" does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static -version 2>&1. Result: *Exec failed*. Permission denied (user: "virt103879" does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (user: "virt103879" does not have permission to execute that binary)
Binaries ordered by version number.
- cwebp: (version: 1.1.0)
- /usr/local/bin/cwebp: (version: 1.1.0)
- /usr/bin/cwebp: (version: 0.3.0)
- /bin/cwebp: (version: 0.3.0)
Trying the first of these. If that should fail (it should not), the next will be tried and so on.
Creating command line options for version: 1.1.0
Trying to convert by executing the following command:
nice cwebp -metadata none -q 85 -alpha_q '85' -near_lossless 60 -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png.webp.lossless.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png.webp.lossless.webp'
File:      [doc-root]/wp-content/uploads/2020/07/Rectangle-38-640x0-c-default.png
Dimension: 640 x 960
Output:    392634 bytes (5.11 bpp)
Lossless-ARGB compressed size: 392634 bytes
  * Header size: 4286 bytes, image data size: 388323
  * Lossless features used: PREDICTION CROSS-COLOR-TRANSFORM SUBTRACT-GREEN
  * Precision Bits: histogram=4 transform=4 cache=10

Success
Reduction: 46% (went from 711 kb to 383 kb)

Picking lossy
cwebp succeeded :)

Converted image in 1510 ms, reducing file size with 92% (went from 711 kb to 57 kb)
