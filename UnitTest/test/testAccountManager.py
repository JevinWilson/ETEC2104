

import unittest
from UnitTest.src.AccountManager import AccountManager
#import src.AccountManager as AccountManager

class Tester(unittest.TestCase):

    def setUp(self):
        #DRY vs WET
        self.A = AccountManager()
        self.A.addUser("alice","qwerty")

    def test_verifyUser(self):
        A = self.A
        self.assertTrue(
            A.verifyUser("alice","qwerty")
        )
    def test_verifyUser_doesnotexist(self):
        A = self.A
        self.assertFalse(
            A.verifyUser("bob","s3cr3t")
        )
    def test_verifyUser_correctUsernameBadPassword(self):
        A = self.A
        self.assertFalse(
            A.verifyUser("alice","s3cr3t")
        )
    def test_addUser1(self):
        A = self.A
        self.assertTrue(A.addUser("bob","s3cr3t"))

    def test_addUser2(self):
        A = self.A
        self.assertFalse(
            A.verifyUser("bob","s3cr3t")
        )
        self.assertTrue(A.addUser("bob","s3cr3t"))
        self.assertTrue(
            A.verifyUser("bob","s3cr3t")
        )
        self.assertFalse(
            A.verifyUser("bob","s3cr3tttt")
        )
