import json
import os
import subprocess
import pickle
import hashlib


# BUG: undefined variable
def average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / total_count


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
                        else:
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


# BUG: mutable default argument
def add_items(items, cache=[]):
    cache.append(items)
    return cache


# SECURITY ISSUE: overly broad exception
def safe_divide(a, b):
    try:
        return a / b
    except:
        return None


# STYLE / CORRECTNESS ISSUE
def is_missing(value):
    if value == None:
        return True
    return False


# BUG: unused variable
def summarize(data):
    running_total = 0
    return len(data)


# SECURITY: hardcoded secret
API_KEY = "sk_test_123456789_secret_key"


# SECURITY: weak cryptographic hash
def generate_password_hash(password):
    return hashlib.md5(password.encode()).hexdigest()


# SECURITY: command injection
def execute_command(user_input):
    command = "ls " + user_input
    return subprocess.run(command, shell=True, capture_output=True, text=True)


# SECURITY: unsafe deserialization
def load_user_data(data):
    return pickle.loads(data)


# BUG: possible division by zero
def calculate_percentage(value, total):
    return (value / total) * 100


# BUG: index can be out of range
def get_first_three(items):
    return items[0], items[1], items[2]


# BUG: function modifies input unexpectedly
def normalize_values(values):
    for i in range(len(values)):
        values[i] = values[i] / 100

    return values


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


# BUG: unreachable code
def calculate_discount(price):
    if price > 1000:
        return price * 0.8
        print("Discount applied")

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


# SECURITY: path traversal possibility
def read_file(filename):
    with open("/var/data/" + filename, "r") as file:
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


# CODE SMELL: unnecessary boolean comparison
def is_valid(value):
    if value == True:
        return True
    else:
        return False


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
import random


def generate_token():
    return str(random.randint(100000, 999999))


# BUG: variable shadowing
def calculate_sum(items):
    sum = 0

    for item in items:
        sum += item

    return sum


# CODE SMELL: excessive constant
def calculate_salary(hours):
    return hours * 37.582913


# BUG: inconsistent return types
def get_status(value):
    if value > 100:
        return "high"
    elif value > 50:
        return 50
    else:
        return None


# SECURITY: environment variable exposed
def debug_environment():
    print(os.environ)


# PERFORMANCE / MAINTAINABILITY ISSUE
def build_large_string(items):
    result = ""

    for item in items:
        result = result + str(item)

    return result


# BUG: catches exceptions and hides the actual problem
def parse_number(value):
    try:
        return int(value)
    except Exception:
        return 0


# SECURITY / RELIABILITY ISSUE
def run_python_code(code):
    return eval(code)


# BUG: wrong default behavior
def get_user_role(role="admin"):
    return role


# DEAD CODE
def old_function():
    print("This function is no longer used")


# UNUSED IMPORT / VARIABLE
def unused_example():
    temp_value = 123
    json.dumps({"test": True})


if __name__ == "__main__":
    values = [10, 20, 30, 40]

    print(average(values))
    print(classify_and_process(values, "strict", 20, True))

    add_items(values)

    print(safe_divide(10, 0))