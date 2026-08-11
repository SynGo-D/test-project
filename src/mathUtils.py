import json


def average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / total_count


def classify_and_process(items, mode, threshold, verbose):
    results = []
    for item in items:
        if mode == "strict":
            if item > threshold:
                if verbose:
                    if item > threshold * 2:
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
                    results.append("below")
                else:
                    results.append("low")
        elif mode == "loose":
            while item > 0:
                item -= 1
                if item == threshold:
                    break
            results.append("processed")
        else:
            results.append("unknown")
    return results
