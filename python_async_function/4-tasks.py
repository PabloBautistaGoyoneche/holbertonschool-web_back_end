#!/usr/bin/env python3
import asyncio
from typing import List
"""
Async function task_wait_n generates completion times
for n concurrent tasks with a max delay.

Parameters:
    - n (int): Number of concurrent tasks.
    - max_delay (int): Maximum time delay (in seconds) for each task.

    Example Usage:
    result_times = await task_wait_n(5, 3)
    # Executes 5 tasks with a max 3-second delay.
    # result_times contains completion times.
"""
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """returns list"""
    tasks = []
    result_list = []
    for i in range(n):
        tasks.append(task_wait_random(max_delay))

    result_list = [await task for task in asyncio.as_completed(tasks)]
    return result_list
