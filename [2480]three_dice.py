count = {}
lists = list(map(int, input().split()))
for i in lists:
  try:
    count[i] += 1
  except:
    count[i] = 1

cnt = len(count)
if cnt == 1:
  k, v = list(count.items())[0]
  print(10000 + k * 1000)
elif cnt == 2:
  for k, v in count.items():
    if v == 2:
      print(1000 + k * 100)
else:
  print(max(lists) * 100)