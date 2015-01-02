package user_test

import (
    "github.com/onsi/ginkgo"
    "github.com/onsi/gomega"
    "user"
)

var _ = Describe("User", func() {
    var u *user.User

    BeforeEach(func() {
        var err error
        u, err = user.New()
        Expect(err).NotTo(HaveOccurred())
    })

    Describe("Password validation", func() {
        Context("Password should be valid", func() {
            It("should be entered as pacia1986", func() {
                u.password = "pacia1986"
                Expect(u.password()).To(Equal("pacia1986"))
            })
        })
    })
})