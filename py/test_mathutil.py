import unittest

from mathutil import add


class AddTest(unittest.TestCase):
    def test_add_returns_the_arithmetic_sum(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)


if __name__ == "__main__":
    unittest.main()
