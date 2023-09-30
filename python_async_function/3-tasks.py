#!/usr/bin/env python3
"""
This script defines a function 'task_wait_random'
that creates and returns an asyncio Task
to execute the 'wait_random' function
with a specified 'max_delay'.
"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """returns an asyncio Task"""
    return asyncio.create_task(wait_random(max_delay))
