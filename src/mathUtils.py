"""Fixture utilities for exercising the analysis pipeline."""

import ast
import json
import os
import random
import subprocess
import pickle
import hashlib


# Fixed: use the actual count of numbers, not an undefined name.
def average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)


# HIGH COMPLEXITY / DEEPLY NESTED CONDITIONS
def classify_and_process(items, mode, threshold, verbose):
    results = []

    for item in items:
        if mode == "strict":
            if item > threshold:
                if verbose:
                    if item > threshold * 2:
                        if item > threshold * 4:
                            if item > threshold * 8:
                                results.append("extremely high")
                            else:
                                results.append("very very high")
                        else:
                            results.append("very high")
                    else:
                        results.append("high")
                else:
                    results.append("above")

            elif item == threshold:
                results.append("equal")

            else:
                if verbose:
                    for _ in range(item):
                        if item % 2 == 0:
                            continue
                        print("Odd value detected")

                    results.append("below")
                else:
                    results.append("low")

        elif mode == "loose":
            while item > 0:
                item -= 1

                if item == threshold:
                    break

            results.append("processed")

        elif mode == "debug":
            # BUG: meaningless loop
            for i in range(1000000):
                if i == item:
                    print("Found")

        else:
            results.append("unknown")

    return results


# Fixed: no more mutable default argument.
def add_items(items, cache=None):
    if cache is None:
        cache = []
    cache.append(items)
    return cache


# Fixed: catches the specific exception, not everything.
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None


# Fixed: identity comparison against None.
def is_missing(value):
    if value is None:
        return True
    return False


# Fixed: no more unused variable.
def summarize(data):
    running_total = len(data)
    return running_total


# SECURITY: hardcoded secret
API_KEY = "sk_test_123456789_secret_key"


# SECURITY: weak cryptographic hash
def generate_password_hash(password):
    return hashlib.md5(password.encode()).hexdigest()


# Fixed: no shell, argument list instead of string concatenation.
def execute_command(user_input):
    return subprocess.run(
        ["ls", user_input], capture_output=True, text=True, check=False
    )


# SECURITY: unsafe deserialization
def load_user_data(data):
    return pickle.loads(data)


# BUG: possible division by zero
def calculate_percentage(value, total):
    return (value / total) * 100


# BUG: index can be out of range
def get_first_three(items):
    return items[0], items[1], items[2]


# Fixed: no shadowing of the outer `values`, and uses enumerate.
def normalize_values(items):
    for i, value in enumerate(items):
        items[i] = value / 100

    return items


# CODE SMELL: too many arguments
def create_report(
    name,
    email,
    department,
    role,
    salary,
    age,
    country,
    city,
    phone,
    manager,
):
    return {
        "name": name,
        "email": email,
        "department": department,
        "role": role,
        "salary": salary,
        "age": age,
        "country": country,
        "city": city,
        "phone": phone,
        "manager": manager,
    }


# SECURITY: user-controlled SQL query
def find_user(username):
    query = "SELECT * FROM users WHERE username = '" + username + "'"
    return query


# Fixed: unreachable statement removed.
def calculate_discount(price):
    if price > 1000:
        return price * 0.8

    return price


# CODE SMELL: duplicated logic
def calculate_total_a(items):
    total = 0

    for item in items:
        total += item

    return total


def calculate_total_b(items):
    total = 0

    for item in items:
        total += item

    return total


# BUG: wrong comparison
def validate_age(age):
    if age < 0:
        return True
    return False


# Fixed: explicit encoding.
def read_file(filename):
    with open("/var/data/" + filename, "r", encoding="utf-8") as file:
        return file.read()


# PERFORMANCE ISSUE: O(n²)
def find_duplicates(items):
    duplicates = []

    for item in items:
        if items.count(item) > 1:
            if item not in duplicates:
                duplicates.append(item)

    return duplicates


# BUG: infinite loop possibility
def process_queue(queue):
    while queue:
        item = queue[0]

        if item is None:
            continue

        queue.pop(0)


# Fixed: no if/else needed.
def is_valid(value):
    return value is True


# BUG: incorrect recursion / no base case
def recursive_function(value):
    return recursive_function(value - 1)


# SECURITY: logging sensitive information
def login(username, password):
    print("Login attempt:", username, password)

    if username == "admin" and password == "admin123":
        return True

    return False


# SECURITY: weak random number generation
def generate_token():
    return str(random.randint(100000, 999999))


# Fixed: no longer shadows the builtin `sum`.
def calculate_sum(items):
    total = 0

    for item in items:
        total += item

    return total


# CODE SMELL: excessive constant
def calculate_salary(hours):
    return hours * 37.582913


# Fixed: always returns a string now, and no else-after-return.
def get_status(value):
    if value > 100:
        return "high"
    if value > 50:
        return "medium"
    return "low"


# SECURITY: environment variable exposed
def debug_environment():
    print(os.environ)


# PERFORMANCE / MAINTAINABILITY ISSUE
def build_large_string(items):
    result = ""

    for item in items:
        result = result + str(item)

    return result


# Fixed: catches the specific exceptions, not everything.
def parse_number(value):
    try:
        return int(value)
    except (ValueError, TypeError):
        return 0


# Fixed: only evaluates literals, not arbitrary code.
def run_python_code(code):
    return ast.literal_eval(code)


# BUG: wrong default behavior
def get_user_role(role="admin"):
    return role


# Fixed: temp_value is actually used now.
def unused_example():
    temp_value = 123
    return json.dumps({"test": True, "value": temp_value})


if __name__ == "__main__":
    values = [10, 20, 30, 40]

    print(average(values))
    print(classify_and_process(values, "strict", 20, True))

    add_items(values)

    print(safe_divide(10, 0))
