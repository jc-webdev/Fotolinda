WebP Express 0.17.4. Conversion triggered using bulk conversion, 2020-08-01 19:09:59

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.2.14
- Server software: Apache

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/wp-content/uploads/2020/08/gotowe.jpg
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/gotowe.jpg.webp
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
- source: [doc-root]/wp-content/uploads/2020/08/gotowe.jpg
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/gotowe.jpg.webp
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
Quality of source is 90. This is higher than max-quality, so using max-quality instead (80)
The near-lossless option ignored for lossy
Trying to convert by executing the following command:
nice cwebp -metadata none -q 80 -alpha_q '85' -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/08/gotowe.jpg' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/gotowe.jpg.webp.lossy.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/gotowe.jpg.webp.lossy.webp'
File:      [doc-root]/wp-content/uploads/2020/08/gotowe.jpg
Dimension: 840 x 1200
Output:    96262 bytes Y-U-V-All-PSNR 41.10 44.29 43.58   41.85 dB
block count:  intra4: 3606
              intra16: 369  (-> 9.28%)
              skipped block: 3 (0.08%)
bytes used:  header:            234  (0.2%)
             mode-partition:  17318  (18.0%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |   49483 |    3160 |    3163 |    1597 |   57403  (59.6%)
 intra16-coeffs:  |    1158 |     473 |     821 |    1028 |    3480  (3.6%)
  chroma coeffs:  |   13588 |    1413 |    1732 |    1066 |   17799  (18.5%)
    macroblocks:  |      65%|      11%|      12%|      11%|    3975
      quantizer:  |      23 |      17 |      11 |      11 |
   filter level:  |      30 |      20 |      17 |      11 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |   64229 |    5046 |    5716 |    3691 |   78682  (81.7%)

Success
Reduction: 69% (went from 307 kb to 94 kb)

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
nice cwebp -metadata none -q 80 -alpha_q '85' -near_lossless 60 -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/08/gotowe.jpg' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/gotowe.jpg.webp.lossless.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/gotowe.jpg.webp.lossless.webp'
File:      [doc-root]/wp-content/uploads/2020/08/gotowe.jpg
Dimension: 840 x 1200
Output:    682626 bytes
Lossless-ARGB compressed size: 682626 bytes
  * Header size: 6051 bytes, image data size: 676550
  * Lossless features used: PREDICTION CROSS-COLOR-TRANSFORM SUBTRACT-GREEN
  * Precision Bits: histogram=5 transform=4 cache=10

Success
Reduction: -117% (went from 307 kb to 667 kb)

Picking lossy
cwebp succeeded :)

Converted image in 2976 ms, reducing file size with 69% (went from 307 kb to 94 kb)
