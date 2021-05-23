WebP Express 0.17.5. Conversion triggered using bulk conversion, 2020-12-20 13:24:17

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.4.13
- Server software: LiteSpeed

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/wp-content/uploads/2020/08/a-26-scaled.jpg
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/a-26-scaled.jpg.webp
- log-call-arguments: true
- converters: (array of 9 items)

The following options have not been explicitly set, so using the following defaults:
- converter-options: (empty array)
- shuffle: false
- preferred-converters: (empty array)
- extra-converters: (empty array)

The following options were supplied and are passed on to the converters in the stack:
- default-quality: 70
- encoding: "auto"
- max-quality: 80
- metadata: "none"
- near-lossless: 60
- quality: "auto"
------------


*Trying: cwebp* 

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/wp-content/uploads/2020/08/a-26-scaled.jpg
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/a-26-scaled.jpg.webp
- default-quality: 70
- encoding: "auto"
- low-memory: true
- log-call-arguments: true
- max-quality: 80
- metadata: "none"
- method: 6
- near-lossless: 60
- quality: "auto"
- use-nice: true
- command-line-options: ""
- try-common-system-paths: true
- try-supplied-binary-for-os: true

The following options have not been explicitly set, so using the following defaults:
- alpha-quality: 85
- auto-filter: false
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
Quality of source is 82. This is higher than max-quality, so using max-quality instead (80)
The near-lossless option ignored for lossy
Trying to convert by executing the following command:
nice cwebp -metadata none -q 80 -alpha_q '85' -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/08/a-26-scaled.jpg' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/a-26-scaled.jpg.webp.lossy.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/a-26-scaled.jpg.webp.lossy.webp'
File:      [doc-root]/wp-content/uploads/2020/08/a-26-scaled.jpg
Dimension: 2560 x 1816
Output:    261938 bytes Y-U-V-All-PSNR 42.37 47.89 46.99   43.50 dB
           (0.45 bpp)
block count:  intra4:      13643  (74.80%)
              intra16:      4597  (25.20%)
              skipped:       104  (0.57%)
bytes used:  header:            414  (0.2%)
             mode-partition:  54154  (20.7%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |   87700 |   15240 |   19280 |   13167 |  135387  (51.7%)
 intra16-coeffs:  |   13555 |    7414 |    5848 |   10672 |   37489  (14.3%)
  chroma coeffs:  |   19395 |    3905 |    4576 |    6588 |   34464  (13.2%)
    macroblocks:  |      43%|      15%|      17%|      25%|   18240
      quantizer:  |      26 |      20 |      15 |      11 |
   filter level:  |      28 |      23 |      21 |      17 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |  120650 |   26559 |   29704 |   30427 |  207340  (79.2%)

Success
Reduction: 57% (went from 601 kb to 256 kb)

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
nice cwebp -metadata none -q 80 -alpha_q '85' -near_lossless 60 -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/08/a-26-scaled.jpg' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/a-26-scaled.jpg.webp.lossless.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/a-26-scaled.jpg.webp.lossless.webp'
File:      [doc-root]/wp-content/uploads/2020/08/a-26-scaled.jpg
Dimension: 2560 x 1816
Output:    2285398 bytes (3.93 bpp)
Lossless-ARGB compressed size: 2285398 bytes
  * Header size: 17076 bytes, image data size: 2268297
  * Lossless features used: PREDICTION CROSS-COLOR-TRANSFORM SUBTRACT-GREEN
  * Precision Bits: histogram=6 transform=4 cache=10

Success
Reduction: -271% (went from 601 kb to 2232 kb)

Picking lossy
cwebp succeeded :)

Converted image in 15824 ms, reducing file size with 57% (went from 601 kb to 256 kb)
