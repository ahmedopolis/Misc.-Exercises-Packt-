# My version
def format_customer(*name, location = None):
    full_name = f"{name[0]} {name[1]}"
    if location:
        return f"{name[0]} {name[1]} {location}"
    else:
        return full_name