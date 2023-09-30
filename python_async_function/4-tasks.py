#!/usr/bin/env python3
""" Async function task_wait_n creates a list of
    completion times for concurrent tasks with a max delay.

Parameters:
    - n (int): Number of concurrent tasks.
    - max_delay (int): Maximum delay (in seconds) for each task.
    The function uses task_wait_random from
    '3-tasks' module to execute tasks asynchronously
    and returns a list of completion times.

    Example Usage:
    result_times = await task_wait_n(5, 3)
    # Executes 5 tasks with a max 3-second delay.
    # result_times contains completion times.

    Note:
    Ensure the '3-tasks' module with task_wait_random
    is properly defined for this script.
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """returns list"""
    tasks = []
    result_list = []
    for i in range(n):
        tasks.append(task_wait_random(max_delay))

    result_list = [await task for task in asyncio.as_completed(tasks)]
    return result_list
