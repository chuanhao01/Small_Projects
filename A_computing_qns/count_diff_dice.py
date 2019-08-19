import random as ra
diff_count = {}
for i in range(6):
    diff_count[i] = 0
for i in range(1000):
    roll_diff = abs(ra.randint(1,6) - ra.randint(1,6))
    diff_count[roll_diff] += 1
print('Difference Frequency')
for key in diff_count:
    print('%d\t   %d\t'% (key, diff_count[key]))
print('Odd Difference Frequency: %d'% (diff_count[1] + diff_count[3] + diff_count[5]))
print('Even Difference Frequency: %d' % (diff_count[0] + diff_count[2] + diff_count[4]))