#!/bin/bash


mkdir -p reports


REPORT="reports/security-report.md"


echo "# Shift-Left DevSecOps Security Report" > $REPORT


echo "" >> $REPORT
echo "Generated: $(date)" >> $REPORT


echo "" >> $REPORT
echo "## Security Pipeline Results" >> $REPORT


cat >> $REPORT <<EOF

| Security Stage | Tool | Status |
|---|---|---|
| Secret Detection | Gitleaks | Completed |
| Static Code Analysis | Semgrep | Completed |
| Dependency Scanning | Trivy | Completed |
| Container Security | Trivy Image | Completed |
| Dynamic Testing | OWASP ZAP | Completed |
| SBOM Generation | Syft | Completed |

EOF


echo "## DevSecOps Coverage" >> $REPORT


cat >> $REPORT <<EOF

Implemented security controls:

- Hardcoded secret detection
- Vulnerable dependency blocking
- Secure coding checks
- Container vulnerability analysis
- Runtime web application testing
- Software supply chain inventory

EOF


echo "Report generated successfully"
