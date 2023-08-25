class IsraeliIdValidator:
    @staticmethod
    def validate_id(value):
        # INPUT VALIDATION
        if value == "":
            return True
        
        # Just in case -> convert to string
        iDnum = str(value)
        
        # Validate correct input
        if len(iDnum) > 9 or len(iDnum) < 5:
            return False
        if not iDnum.isdigit():
            return False
        
        # The number is too short - add leading 0000
        if len(iDnum) < 9:
            while len(iDnum) < 9:
                iDnum = '0' + iDnum
        
        # CHECK THE ID NUMBER
        mone = 0
        for i in range(9):
            incNum = int(iDnum[i])
            incNum *= (i % 2) + 1
            if incNum > 9:
                incNum -= 9
            mone += incNum
        
        if mone % 10 == 0:
            return True
        else:
            return False

# Usage
value = input("Enter an ID: ")
is_valid = IsraeliIdValidator.validate_id(value)
if is_valid:
    print("Valid Israeli ID")
else:
    print("Invalid Israeli ID")