#include <iostream>
#include <vector>

using namespace std;

void bubblesort(int arr[],int n){
	int i,j;
	for(i=0;i<n-1;i++){
	    for(j=0;j<n-i-1;j++){
	        if(arr[j]>arr[j+1]){
	            swap(arr[j],arr[j+1]);
	        }
	    }
	}
}

void printArray(int arr[],int n){
	int i,j;
	for(i=0;i<n;i++){
	    cout << arr[i] <<endl;
	}
	
	
}

int main() {
	// Your code goes here;
	int array [] ={5,2,6,1,7};
	int n= sizeof(array)/sizeof(int);
	bubblesort(array,n);
    printArray(array,n);
	return 0;
}
