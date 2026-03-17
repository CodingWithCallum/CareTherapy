import os
import re

# Word boundary \b for most, but maybe not for all. Let's be careful.
terms = [
    r"\bphysiotherapist\b", r"\bphysiotherapy\b", r"\bbiokineticist\b", r"\bbiokinetics\b",
    r"\bpatient\b", r"\bpatients\b",
    r"\bdiagnose\b", r"\bdiagnosed\b", r"\bdiagnoses\b", r"\bdiagnosing\b",
    r"\bcure\b", r"\bcured\b", r"\bcures\b", r"\bcuring\b",
    r"\btreatment\b", r"\btreatments\b",
    r"\bmedical\b",
    r"\bprescribe\b", r"\bprescribed\b", r"\bprescribes\b", r"\bprescribing\b",
    r"\brehabilitation\b", r"\brehab\b",
    r"\bHPCSA\b", r"\bpractice number\b"
]

pattern = re.compile("|".join(terms), re.IGNORECASE)

for root, dirs, files in os.walk("caretherapy/src"):
    for f in files:
        if f.endswith(('.ts', '.tsx', '.js', '.jsx', '.md', '.mdoc', '.json', '.html')):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as file:
                lines = file.readlines()
                for i, line in enumerate(lines):
                    if pattern.search(line):
                        print(f"{filepath}:{i+1}:{line.strip()}")
