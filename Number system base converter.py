import math


class NumberBaseConverter:
    def __init__(self):
        self.key = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', "N", 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        self.number, self.base = self.getNumbers()
        self.new_base = self.getConvertedBase()
        self.new_number = self.getNewNumber(self.number, self.base, self.new_base)

    # gets user number and in its base
    def getNumbers(self):
        check_input = True
        while check_input:
            number = input("What is your number: ")
            base = input("What base is it in: ")
            if ((number.upper() == number) and (not (' ' in number)) and (not not number)):
                try:
                    base = int(base)
                    check_input = False
                except:
                    print('Your Base is not a number')
            else:
                print('Your Number is not a proper number!')
        # print(type(number))
        return number, base

    def getConvertedBase(self):
        check_input = True
        while check_input:
            new_base = input('What is your desired base: ')
            try:
                new_base = int(new_base)
                check_input = False
            except:
                print('You did not input numbers!')
        return new_base

    def getNewNumber(self, number, base, new_base):
        number = number.split(".")
        if len(number) == 1:
            new_number = self.getOnlyPositiveNumber(number, base, new_base)
        else:
            new_number = self.getBothNumber(number, base, new_base)
        # print statement
        print(new_number)
        return new_number


    def getOnlyPositiveNumber(self, number, base, new_base):
        positive_exponent_value = self.getValueOfPositiveExponent(number[0], base)
        new_positive_exponent_value = self.getPositiveExponentfromDecimal(positive_exponent_value, new_base)
        # print statement
        print(new_positive_exponent_value)
        return new_positive_exponent_value

    def getBothNumber(self, number, base, new_base):
        positive_exponent_value = self.getValueOfPositiveExponent(number[0], base)
        negative_exponent_value = self.getValueOfNegativeExponent(number[1], base)
        # print statement
        print(positive_exponent_value, negative_exponent_value)
        new_positive_exponent_value = self.getPositiveExponentfromDecimal(positive_exponent_value, new_base)
        new_negative_exponent_value = self.getNegativeExponentfromDecimal(negative_exponent_value, new_base)
        return new_positive_exponent_value + '.' + new_negative_exponent_value

    def getValueOfPositiveExponent(self, number, base):
        decimal_value = 0
        for i in range(len(number)):
            value_of_digit = self.key.index(number[i]) * (base ** (len(number) - i - 1))
            decimal_value += value_of_digit
        return decimal_value

    def getValueOfNegativeExponent(self, number, base):
        decimal_value = 0
        for i in range(len(number)):
            value_of_digit = self.key.index(number[i]) * (base ** (-1 - i))
            decimal_value += value_of_digit
        return decimal_value

    def getPositiveExponentfromDecimal(self, decimal_value, new_base):
        check_status = True
        list_of_digits = []
        while check_status:
            digit = decimal_value%new_base
            decimal_value = math.floor(decimal_value/new_base)
            list_of_digits.insert(0, self.key[digit])
            if(decimal_value == 0):
                check_status = False
        return "".join(list_of_digits)

    def getNegativeExponentfromDecimal(self, decimal_value, new_base):
        check_status = True
        list_of_digits = []
        while check_status:
            num = decimal_value * new_base
            digit = math.floor(num)
            decimal_value = num - digit
            list_of_digits.append(self.key[digit])
            if len(list_of_digits) > 10:
                check_status = False
            elif decimal_value == 0:
                check_status = False
        return ''.join(list_of_digits)

a = NumberBaseConverter()