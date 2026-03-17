import os
import re

terms = [
    r"physiotherapist", r"physiotherapy", r"biokineticist", r"biokinetics",
    r"\bpatient\b", r"\bpatients\b",
    r"\bdiagnose\b", r"\bdiagnoses\b", r"\bdiagnosed\b", r"\bdiagnosing\b",
    r"\bcure\b", r"\bcures\b", r"\bcured\b", r"\bcuring\b",
    r"\btreatment\b", r"\btreatments\b", r"\btreating\b",
    r"\bmedical\b", r"\bmedically\b",
    r"\bprescribe\b", r"\bprescribes\b", r"\bprescribed\b", r"\bprescribing\b",
    r"\brehabilitation\b", r"\brehab\b",
    r"HPCSA", r"practice number"
]

pattern = re.compile("|".join(terms), re.IGNORECASE)

def search_dir(d):
    for root, dirs, files in os.walk(d):
        for f in files:
            if f.endswith(('.ts', '.tsx', '.js', '.jsx', '.md', '.mdoc', '.json', '.html')):
                filepath = os.path.join(root, f)
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as file:
                    for i, line in enumerate(file):
                        # Filter out lines that are just TODO comments
                        if pattern.search(line):
                            print(f"{filepath}:{i+1}:{line.strip()}")

search_dir("caretherapy/src")
