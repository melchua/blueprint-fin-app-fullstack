#!/usr/bin/env python
import subprocess
import sys
import argparse

def run_command(command):
    try:
        subprocess.run(command, check=True, shell=True)
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {e}")
        sys.exit(1)

def freeze():
    """Generate requirements.txt from current environment"""
    run_command("uv pip freeze > requirements.txt")
    print("✨ Generated requirements.txt")

def lock():
    """Generate requirements.lock from requirements.txt"""
    run_command("uv pip compile requirements.txt -o requirements.lock")
    print("🔒 Generated requirements.lock")

def sync():
    """Install packages from requirements.lock"""
    run_command("uv pip sync requirements.lock")
    print("📦 Installed dependencies from lock file")

def main():
    parser = argparse.ArgumentParser(description="Dependency management script using uv")
    parser.add_argument("command", choices=["freeze", "lock", "sync"], 
                      help="Command to run (freeze/lock/sync)")
    
    args = parser.parse_args()
    
    commands = {
        "freeze": freeze,
        "lock": lock,
        "sync": sync
    }
    
    commands[args.command]()

if __name__ == "__main__":
    main() 