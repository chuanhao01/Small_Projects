import math

def ncr(n, r):
    f = math.factorial
    return f(n) // (f(r) * f(n-r))

def bin_prob(n, p, x):
    return ncr(n, x) * (p**x) * ((1-p) ** (n-x))

done = False
while(not done):
    n = int(input('What is your n'))
    p = float(input('What is your p'))
    x = int(input('What is your x'))
    decision = int(input('What is your deciosion:\n1. P(X = x)\n2. P(X < x)'))
    if (decision == 1):
        print('{}'.format(ncr(n, x) * (p**x) * ((1-p) ** (n-x))))
    elif (decision == 2):
        sum_prob = 0
        for i in range(x):
            sum_prob += bin_prob(n, p, i)
        print('{}'.format(sum_prob))
    done = int(input('Done? 0 or 1'))
    if(done == 0):
        done = False
    elif (done == 1):
        done == True

            
