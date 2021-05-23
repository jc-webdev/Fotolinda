WebP Express 0.17.4. Conversion triggered with the conversion script (wod/webp-on-demand.php), 2020-08-01 15:19:30

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.2.14
- Server software: Apache

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/wp-content/uploads/2020/07/Rectangle-29.png
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-29.png.webp
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
- source: [doc-root]/wp-content/uploads/2020/07/Rectangle-29.png
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-29.png.webp
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
- Executing: cwebp -version 2>&1. Result: version: *0.5.2*
We could get the version, so yes, a plain cwebp call works
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 3 binaries: 
- /usr/sbin/cwebp
- /bin/cwebp
- /usr/bin/cwebp
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 1 binaries: 
- /usr/bin/cwebp
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (Linux)... We do. We in fact have 3
Found 3 binaries: 
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64
Detecting versions of the cwebp binaries found
- Executing: cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /usr/sbin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /bin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /usr/bin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
Binaries ordered by version number.
- cwebp: (version: 0.5.2)
- /usr/sbin/cwebp: (version: 0.5.2)
- /bin/cwebp: (version: 0.5.2)
- /usr/bin/cwebp: (version: 0.5.2)
Trying the first of these. If that should fail (it should not), the next will be tried and so on.
Creating command line options for version: 0.5.2
Quality: 85. 
The near-lossless option ignored for lossy
Trying to convert by executing the following command:
nice cwebp -metadata none -q 85 -alpha_q '85' -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/07/Rectangle-29.png' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-29.png.webp.lossy.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-29.png.webp.lossy.webp'
File:      [doc-root]/wp-content/uploads/2020/07/Rectangle-29.png
Dimension: 480 x 360
Output:    24064 bytes Y-U-V-All-PSNR 41.19 44.09 43.35   41.88 dB
block count:  intra4: 569
              intra16: 121  (-> 17.54%)
              skipped block: 1 (0.14%)
bytes used:  header:            238  (1.0%)
             mode-partition:   2847  (11.8%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |   12876 |     442 |     548 |     296 |   14162  (58.9%)
 intra16-coeffs:  |     625 |     457 |     462 |     169 |    1713  (7.1%)
  chroma coeffs:  |    4341 |     302 |     262 |     174 |    5079  (21.1%)
    macroblocks:  |      65%|      11%|      12%|      10%|     690
      quantizer:  |      17 |      12 |       8 |       8 |
   filter level:  |      16 |       3 |       2 |      11 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |   17842 |    1201 |    1272 |     639 |   20954  (87.1%)

Success
Reduction: 65% (went from 67 kb to 24 kb)

Converting to lossless
Looking for cwebp binaries.
Discovering if a plain cwebp call works (to skip this step, disable the "try-cwebp" option)
- Executing: cwebp -version 2>&1. Result: version: *0.5.2*
We could get the version, so yes, a plain cwebp call works
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 3 binaries: 
- /usr/sbin/cwebp
- /bin/cwebp
- /usr/bin/cwebp
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 1 binaries: 
- /usr/bin/cwebp
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (Linux)... We do. We in fact have 3
Found 3 binaries: 
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64
Detecting versions of the cwebp binaries found
- Executing: cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /usr/sbin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /bin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /usr/bin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
Binaries ordered by version number.
- cwebp: (version: 0.5.2)
- /usr/sbin/cwebp: (version: 0.5.2)
- /bin/cwebp: (version: 0.5.2)
- /usr/bin/cwebp: (version: 0.5.2)
Trying the first of these. If that should fail (it should not), the next will be tried and so on.
Creating command line options for version: 0.5.2
Trying to convert by executing the following command:
nice cwebp -metadata none -q 85 -alpha_q '85' -near_lossless 60 -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/07/Rectangle-29.png' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-29.png.webp.lossless.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-29.png.webp.lossless.webp'
File:      [doc-root]/wp-content/uploads/2020/07/Rectangle-29.png
Dimension: 480 x 360
Output:    64662 bytes
Lossless-ARGB compressed size: 64662 bytes
  * Header size: 1199 bytes, image data size: 63438
  * Lossless features used: PALETTE
  * Precision Bits: histogram=4 transform=4 cache=2
  * Palette size:   256

Success
Reduction: 6% (went from 67 kb to 63 kb)

Picking lossy
cwebp succeeded :)

Converted image in 629 ms, reducing file size with 65% (went from 67 kb to 24 kb)
