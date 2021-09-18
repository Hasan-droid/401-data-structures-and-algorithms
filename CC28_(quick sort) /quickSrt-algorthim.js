"use strict"

	
// A utility function to swap two elements
function swap( arr,  i,  j)
{
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}


function partition( arr,  low,  high)
{
	
	// pivot
	let pivot = arr[high];
	
	// Index of smaller element and
	// indicates the right position
	// of pivot found so far
	let i = (low - 1);

	for(let j = low; j <= high - 1; j++)
	{
		
		// If current element is smaller
		// than the pivot
		if (arr[j] < pivot)
		{
			
			// Increment index of
			// smaller element
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return (i + 1);
}


function quickSort(arr,  low,  high)
{
	if (low < high)
	{
		
		// pi is partitioning index, arr[p]
		// is now at right place
		let pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}

    return arr;
}

module.exports=quickSort;




// This code is contributed by Ayush Choudhary (I did mention that in purpose :) )
