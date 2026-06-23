# DevSecOps Demo Script


## Introduction (30 seconds)

This project implements a Shift-Left DevSecOps pipeline.

Traditional security testing happens after development.

This approach integrates automated security checks directly into CI/CD.



## Problem Statement (45 seconds)

Developers may accidentally introduce:

- Secrets
- Vulnerable dependencies
- Insecure code
- Container vulnerabilities
- Deployment misconfigurations


Manual checking is slow and inconsistent.



## Solution Architecture (1 minute)

When code is pushed:

GitHub Actions automatically triggers:

1. Gitleaks

Detects hardcoded credentials.


2. Semgrep

Performs Static Application Security Testing.


3. Trivy

Detects dependency and container vulnerabilities.


4. OWASP ZAP

Tests running applications dynamically.


5. Syft

Creates SBOM inventory.


6. Kubernetes Scanner

Blocks insecure deployment.



## Demo (2 minutes)

Show:

1. GitHub Actions workflow

2. Failed build caused by vulnerability

3. Security report

4. Fixed secure build



## Business Impact

This reduces:

- Late vulnerability discovery
- Manual security review effort
- Production security risks
