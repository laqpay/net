package op

import (
	"sync"

	"github.com/laqpay/net/laqpay-messenger/factory"
	"github.com/laqpay/net/laqpay-messenger/msg"
	"github.com/laqpay/laqpay/src/cipher"
)

type Send struct {
	PublicKey string
	Msg       string
}

func init() {
	msg.OP_POOL[msg.OP_SEND] = &sync.Pool{
		New: func() interface{} {
			return new(Send)
		},
	}
}

func (s *Send) Execute(c msg.OPer) error {
	key, err := cipher.PubKeyFromHex(s.PublicKey)
	if err != nil {
		return err
	}
	c.GetFactory().ForEachConn(func(connection *factory.Connection) {
		connection.Send(key, []byte(s.Msg))
	})
	return nil
}
