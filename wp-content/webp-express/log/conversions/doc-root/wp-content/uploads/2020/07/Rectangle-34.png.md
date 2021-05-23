WebP Express 0.17.4. Conversion triggered with the conversion script (wod/webp-on-demand.php), 2020-08-01 15:19:32

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.2.14
- Server software: Apache

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/wp-content/uploads/2020/07/Rectangle-34.png
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-34.png.webp
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
- source: [doc-root]/wp-content/uploads/2020/07/Rectangle-34.png
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-34.png.webp
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
nice cwebp -metadata none -q 85 -alpha_q '85' -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/07/Rectangle-34.png' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-34.png.webp.lossy.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-34.png.webp.lossy.webp'
File:      [doc-root]/wp-content/uploads/2020/07/Rectangle-34.png
Dimension: 480 x 720
Output:    41090 bytes Y-U-V-All-PSNR 41.22 44.97 45.40   42.18 dB
block count:  intra4: 1182
              intra16: 168  (-> 12.44%)
              skipped block: 5 (0.37%)
bytes used:  header:            226  (0.6%)
             mode-partition:   5889  (14.3%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |   22033 |    1246 |    2285 |       0 |   25564  (62.2%)
 intra16-coeffs:  |     538 |     343 |     771 |       0 |    1652  (4.0%)
  chroma coeffs:  |    6194 |     506 |    1030 |       0 |    7730  (18.8%)
    macroblocks:  |      65%|      10%|      23%|       0%|    1350
      quantizer:  |      17 |      12 |       8 |       8 |
   filter level:  |      12 |       3 |       6 |       0 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |   28765 |    2095 |    4086 |       0 |   34946  (85.0%)

Success
Reduction: 70% (went from 132 kb to 40 kb)

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
nice cwebp -metadata none -q 85 -alpha_q '85' -near_lossless 60 -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/07/Rectangle-34.png' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-34.png.webp.lossless.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-34.png.webp.lossless.webp'
File:      [doc-root]/wp-content/uploads/2020/07/Rectangle-34.png
Dimension: 480 x 720
Output:    127018 bytes
Lossless-ARGB compressed size: 127018 bytes
  * Header size: 1353 bytes, image data size: 125639
  * Lossless features used: PALETTE
  * Precision Bits: histogram=4 transform=4 cache=2
  * Palette size:   256

Success
Reduction: 6% (went from 132 kb to 124 kb)

Picking lossy
cwebp succeeded :)

Converted image in 770 ms, reducing file size with 70% (went from 132 kb to 40 kb)
