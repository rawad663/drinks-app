
## Node.js and npm Setup Instructions

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, and npm (Node Package Manager) is the largest ecosystem of open-source libraries in the world.

### Windows

#### Installing Node.js and npm on Windows

1. **Download the installer**:
   - Go to the [official Node.js website](https://nodejs.org/) and download the installer for Windows. Choose the LTS version for stability or the Current version for the latest features.

2. **Run the installer**:
   - Execute the downloaded `.msi` file.
   - Follow the prompts in the installer (Accept the license agreement, click the `Next` button, and use the default installation settings).

3. **Verify installation**:
   - Open Command Prompt or PowerShell.
   - Type `node -v` to check the Node.js version.
   - Type `npm -v` to check the npm version.

### macOS

#### Installing Node.js and npm on macOS

- **Using Homebrew** (recommended):
  1. If Homebrew is not installed, open Terminal and install Homebrew by running:
     ```sh
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
  2. Install Node.js and npm:
     ```sh
     brew update
     brew install node
     ```
  3. Verify the installation by typing `node -v` and `npm -v` in the Terminal.

- **Using the Installer**:
  1. Download the macOS installer from the [Node.js website](https://nodejs.org/).
  2. Run the `.pkg` installer and follow the installation wizard.
  3. Verify the installation as described above.

### Linux

#### Installing Node.js and npm on Linux

- **Using a Node Version Manager (nvm)** (recommended):
  1. Open your terminal.
  2. Install nvm by running:
     ```sh
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
     ```
  3. Restart your terminal.
  4. Install Node.js by running:
     ```sh
     nvm install node # This installs the latest version of Node.js
     ```
  5. Verify the installation by running `node -v` and `npm -v`.

- **Using a Package Manager**:
  - For **Debian/Ubuntu**:
    ```sh
    sudo apt update
    sudo apt install nodejs npm
    ```
  - For **Fedora**:
    ```sh
    sudo dnf install nodejs
    ```
  - For **CentOS**:
    ```sh
    sudo yum install nodejs
    ```
