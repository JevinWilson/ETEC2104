

import unittest
from src.AccountManager import AccountManager
#import src.AccountManager as AccountManager

class Tester(unittest.TestCase):

    def setUp(self):
        #DRY vs WET
        self.A = AccountManager()
        self.A.addUser("alice","qwerty")
        self.alice_uid = self.A.getUID("alice")
        self.A.addUser("Jevin","password")

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

    #################### getUID tests ####################
    def test_getUID_validUser(self):
        """Test getting UID for a valid username."""
        uid = self.A.getUID("alice")
        self.assertIsNotNone(uid)
        self.assertIsInstance(uid, int)

    def test_getUID_invalidUser(self):
        """Test getting UID for an invalid username."""
        uid = self.A.getUID("bob")
        self.assertIsNone(uid)

    def test_getUID_invalid_input_type(self):
        """Test getting UID with invalid input type."""
        with self.assertRaises(RuntimeError):
            self.A.getUID(123)

    #################### isAdmin tests ####################
    def test_isAdmin_true(self):
        self.A.setAdmin(self.alice_uid, True)
        """Test isAdmin returns True for an admin user."""
        self.assertTrue(self.A.isAdmin(self.alice_uid))

    def test_isAdmin_false(self):
        """Test isAdmin returns False for a non-admin user."""
        self.jevin_uid = self.A.getUID("Jevin")
        self.assertFalse(self.A.isAdmin(self.jevin_uid))

    #################### setAdmin tests ####################
    def test_setAdmin_true(self):
        result = self.A.setAdmin(self.alice_uid, True)
        self.assertTrue(result)
        self.assertTrue(self.A.isAdmin(self.alice_uid))

    def test_setAdmin_false(self):
        """Test removing admin status from a user."""
        result = self.A.setAdmin(self.alice_uid, False)
        self.assertTrue(result)
        self.assertFalse(self.A.isAdmin(self.alice_uid))
    
    def test_setAdmin_invalid_user(self):
        """Test setAdmin with a user ID that does not exist."""
        non_existent_uid = self.alice_uid + 1000  
        result = self.A.setAdmin(non_existent_uid, True)
        self.assertFalse(result)

if __name__=='__main__':
    unittest.main()