#!/usr/bin/env python3
"""
This module defines the `wait_n` function,
which uses asyncio to perform asynchronous operations.

The `wait_n` function takes two arguments:
`n` and `max_delay`, and returns a list of floating-point numbers.
It utilizes the `wait_random` function imported
from another module to create asynchronous tasks
and await their completion.
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """wait_random"""
    list_awaitables = []
    result_list = []

    for i in range(n):
        list_awaitables.append(asyncio.create_task(wait_random(max_delay)))

    for task in asyncio.as_completed(list_awaitables):
        result = await task
        result_list.append(result)

    return result_list
