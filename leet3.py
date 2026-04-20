target = [1,2,3,4]
arr = [2,4,1]
def same(target,arr):
    if len(target) == len(arr):
      if target == arr:
        return True
      else:
        if(sorted(target) == sorted(arr)):
            return True
        else:
            return False
    else:
       return False
       
b = same(target,arr)
print(b)
         