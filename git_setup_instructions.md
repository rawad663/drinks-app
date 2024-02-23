
## Git Setup Instructions

Git is a distributed version control system that helps developers manage and track changes in their code across multiple projects.

### Windows

#### Installing Git on Windows

1. **Download the Git installer**:
   - Visit the official Git website at [git-scm.com](https://git-scm.com/), and download the latest version for Windows.

2. **Run the installer**:
   - Open the downloaded `.exe` file and follow the installation wizard. It's recommended to stick with the default options unless you have specific preferences.

3. **Verify installation**:
   - Open Command Prompt or PowerShell and type `git --version` to check if Git was installed successfully.

### macOS

#### Installing Git on macOS

- Git usually comes pre-installed on macOS. To check, open Terminal and type `git --version`. If Git is not installed, you'll be prompted to install it.
- Alternatively, you can install Git using Homebrew (if you have it installed):
  ```sh
  brew install git
  ```

### Linux

#### Installing Git on Linux

- **Debian/Ubuntu**:
  ```sh
  sudo apt update
  sudo apt install git
  ```
- **Fedora**:
  ```sh
  sudo dnf install git
  ```
- **CentOS**:
  ```sh
  sudo yum install git
  ```

After installation, you can configure Git with your user name and email address using the following commands:
```sh
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```
