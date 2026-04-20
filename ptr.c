#include <stdio.h>
int main()
{
    int x = 10;
    int *ptr = &x;
    ptr = &x;
    printf("%d\n", x);
    printf("%d\n", *ptr);
    printf("%x\n", ptr);
    printf("%x\n", &x);
    return 0;
}