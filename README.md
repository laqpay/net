**This repo is deprecated, the code has been moved to https://github.com/laqpay/laqwire/ in the `pkg/net/` folder**

# Laqpay Networking Framework

[![Build Status](https://travis-ci.com/laqpay/net.svg?branch=master)](https://travis-ci.com/laqpay/net)

Laqpay Networking Framework is a simplified TCP and UDP networking framework. 

[Laqpay Messenger](https://github.com/laqpay/net/tree/master/laqpay-messenger) is based on this infrastructure.

#### Laqpay-messenger

[Laqpay Messenger](https://github.com/laqpay/net/tree/master/laqpay-messenger) is an anonymous instant messenger. You can send messages to others by public keys on the messenger.

![messenger](https://blog.laqpay.net/laqwire/laqwire-and-viscript/messenger.png)

It also provides discovery service, which is using by laqwire, cxo and bbs.

## Protocol

```
                  +--+--------+--------+--------------------+
msg protocol      |  |        |        |                    |
                  +-++-------++-------++---------+----------+
                    |        |        |          |
                    v        |        v          v
                  msg type   |     msg len    msg body
                   1 byte    v     4 bytes
                          msg seq
                          4 bytes



                  +-----------+--------+--------------------+
normal msg        |01|  seq   |  len   |       body         |
                  +-----------+--------+--------------------+


                  +-----------+
ack msg           |80|  seq   |
                  +-----------+


                  +--------------------+
ping msg          |81|    timestamp    |
                  +--------------------+


                  +--------------------+
pong msg          |82|    timestamp    |
                  +--------------------+
```
